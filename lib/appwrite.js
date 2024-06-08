import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const Config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.np.aora",
    projectId: "66630b08002809845fee",
    databaseId: "66630c9e002186e45a8e",
    userCollectionId: "66630ca4001c10a8ba65",
    videosCollectionId: "66630cec000a88a3b17e",
    storageId: "66630f1e00108fd7008c"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(Config.endpoint) // Your Appwrite Endpoint
    .setProject(Config.projectId) // Your project ID
    .setPlatform(Config.platform); // Your application ID or bundle ID

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

// Register User
export async function createUser(formData) {
    const {email,password,username} = formData;
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatar.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await database.createDocument(
        Config.databaseId,
        Config.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

export async function signIn(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email,password);
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }


export async function getCurrentUser(){
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            Config.databaseId,
            Config.userCollectionId,
           [Query.equal('accountId',currentAccount.$id)]
        )
        if(!currentUser) throw Error;
        
        return currentUser.documents[0];

    }
    catch(error){
        throw new Error(error);
    }
}

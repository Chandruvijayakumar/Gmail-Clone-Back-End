import mongoose from 'mongoose';




const Connection=()=>{

    
    const DB_URI  = `mongodb://chanv7540:ueid2eCEY1TVEUTb@ac-tmkjos8-shard-00-00.7tgfbru.mongodb.net:27017,ac-tmkjos8-shard-00-01.7tgfbru.mongodb.net:27017,ac-tmkjos8-shard-00-02.7tgfbru.mongodb.net:27017/?ssl=true&replicaSet=atlas-5qx1j9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser: true});
    console.log('Database connected successfully');
    
    
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;
const Todo= require("../models/Todo");

exports.getTodo= async(req,res) => {
    try{
          
          //fetch all todo items from db
           const todos = await Todo.find({});

           //response
           res.status(200)
           .json({
            success:true,
            data:todos,
            message:"Entire data has been fetched",

           });
    }

    catch(err){
        console.error(err);
        res.status(500)
        .json(
            {
                success:false,
                error:err.message,
                message:"Server Error"
            }
        );
    }
}

exports.getTodoById= async(req,res) => {


    try{
          
        //extract on basis of id 
        const id= req.params.id;
        const todo = await Todo.findById({_id: id})

        //if data given not found 
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"No data found with given id"
                }
            )
        }
        // data found for givn id 
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data found`
        })
  }

  catch(err){
    
    console.error(err);
    res.status(500)
    .json(
        {
            success:false,
            error:err.message,
            message:"Server Error"
        }
    );    
  }

}
const express = require('express')
const port = 5000;
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const stripe = require("stripe")('sk_test_51PRTW4BhTY1CGwmEM2UzytIAz0orcbj7NphVhtmsYOniDG5I01XqlXYgsoUI3hIHiwz7AiHet9oyjvHRo1ZA3HFR000YMiYG0B');

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/MyMongo', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

mongoose.connect('mongodb+srv://herosurnameherofirstname:hero123@mymongo.twfog1l.mongodb.net/MyMongo');
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  })

//--------------------------Login details----------------------------
  const userSchema = new mongoose.Schema({
    username:{
            type:String,
            required : true
    },
    password:{
            type:String,
            required : true
    },
})

const UserSchema = mongoose.model("loginDetails", userSchema);

app.post("/postlogin",async(req,res)=>{
    try {
        const newUser = new UserSchema(req.body);
       
        const savedData = await newUser.save();
        // res.status(200).json(savedData);
        res.status(200).json({ message: "User created successfully." ,savedData});
      } catch (error) {
        res.status(500).json({ errorMessage: error.message });
      }
})



app.get("/getlogin",async(req,res)=>{
    try {
        const userData = await UserSchema.find();
        res.status(200).json(userData);
      } catch (error) {
        res.status(500).json({ errorMessage: error.message });
      }
})


//------------------------------------------------------------------------------


//--------------------------Registartion details----------------------------

const registartionschema =  new mongoose.Schema({
    username:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin: {
        type:Boolean,
        default: false
    }
})

const RegistartionSchema = mongoose.model("registrationdetails",registartionschema)


app.get("/getregistration",async(req,res)=>{
   try {
    const valuess = await RegistartionSchema.find();
    res.status(200).json({message:"user is displayed",valuess})
   } catch (error) {
    res.status(500).json({message:"error is encountered",error})
   }
})

app.post("/postregistration",async(req,res)=>{
    try {
        const valuess = new RegistartionSchema(req.body);
        const stored = await valuess.save();
        res.status(200).json({ message: "User created successfully." ,stored});
    } catch (error) {
        res.send(500).json({message:"there is an error",error});
        console.log(error);
    }
})

app.get("/getlogin1/:username",async(req,res)=>{
    try {
         const vals = req.params.username
        const userData = await RegistartionSchema.findOne({username:vals});
        res.status(200).json(userData);
      } catch (error) {
        res.status(500).json({ errorMessage: error.message });
      }
})

app.delete("/registrationdelete/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const str = await RegistartionSchema.findByIdAndDelete(id);
        res.status(200).json({message:"user succefully deleted"})
    } catch (error) {
        
    }
})


//------------------------------------------------------

//-------------------------cart details-----------------------------

const cartdetials = new mongoose.Schema({
    productid:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true,
    },
    productprice:{
        type:Number,
        required:true
    },
     image:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

const CartDetails = mongoose.model("cardetails",cartdetials);

app.post("/cartdetailspost",async(req,res)=>{
    try {
        const val=new CartDetails(req.body);
        const strval = await val.save();
        res.status(200).json({message:"detail stored in cart",strval})
    } catch (error) {
        res.status(500).json({message:"error occured is ",error})
    }
})

app.get("/cartdetailsget",async(req,res)=>{
    try {
        const vals = await CartDetails.find();
        res.status(200).json({message:"displayed the values",vals})
    } catch (error) {
        res.status(500).json({message:"error occured ",error});
    }
})

app.get("/cartdetailsgetbyusername/:username",async(req,res)=>{
    const user = req.params.username;
    try {
        const resp = await CartDetails.find({username:user})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/cartdelete/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const vss =await CartDetails.findByIdAndDelete(id);
        res.status(200).json({message:"succesfully deleted"})
       
    } catch (error) {
        console.log(error)
    }
})

app.delete("/deletecartitems/:id",async(req,res)=>{
    const  valss = req.params.id;
    try {
        const sv = await CartDetails.findByIdAndDelete(valss);
        res.status(200).json({message:"deleted"});
    } catch (error) {
        
    }
})

// app.delete("/cartdelete/:username",async(req,res)=>{
//     const user = req.params.username
//     try {
//         const vls = await CartDetails.fi
//     } catch (error) {
        
//     }
// })

//------------------------------------------------------
//----------------------checkout --------------------------------


const checkoutdetials = new mongoose.Schema({
    productid:{
        type:Number,
        required:true
    },
    productname:{
        type:String,
        required:true,
    },
    productprice:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

const CheckoutDetails = mongoose.model("checkoutdetails",checkoutdetials)

app.post("/checkoutpost",async(req,res)=>{
    try {
        const valss = new CheckoutDetails(req.body);
        const stred =await  valss.save();
        res.status(200).json({message:"successfully stored",stred})
    } catch (error) {
        res.status(500).json({message:"error occured",error})
    }

})

app.get("/checkoutget",async(req,res)=>{
    try {
        const str = await CheckoutDetails.find();
        res.status(200).json({message:"checkout",str})
    } catch (error) {
        res.status(500).json({message:"error occured",error})
    }
})


// -------------------products js-----------------------------------

const prouctdetails = new mongoose.Schema({
    productid:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
    },
    productprice:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

const ProductsDetails = mongoose.model("products",prouctdetails);

app.get("/productsget",async(req,res)=>{
    try {
        const vals = await ProductsDetails.find();
         res.status(200).json(vals)
    } catch (error) {
        console.log(error);
    }
})
app.get("/productgetone/:id",async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    // res.status(200).json(id)
    try {
        const svr = await ProductsDetails.findById(id)
        res.status(200).json(svr)
    } catch (error) {
        console.log(error)
    }
})
app.post("/productpost",async(req,res)=>{
    try {
        const vls = new ProductsDetails(req.body);
        const str = await vls.save();
        res.status(200).json(str)
    } catch (error) {
        console.log(error);
    } 
})

app.delete("/productdelete/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const reponse = await ProductsDetails.findByIdAndDelete(id);
        res.status(200).json({message:"succesfully deleted"});
    } catch (error) {
        console.log(error);
    }
})

app.put("/productupdate/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const svr = await ProductsDetails.findByIdAndUpdate(id,req.body);
        res.status(200).json({message:"updated"});
    } catch (error) {
        console.log(error)
    }
})


// app.delete("/cartdelete/:id",async (req,res)=>{
//     const id = req.params.id;
//     try {
//         const vss =await CartDetails.findByIdAndDelete(id);
//         res.status(200).json({message:"succesfully deleted"})
       
//     } catch (error) {
//         console.log(error)
//     }
// })



/////////////------------------------------payment--------------------------------------------



//-----------------------------------------
app.post("/create-checkout-session", async (req, res) => {
    try {
        const products = req.body.products;
        // console.log(products)

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.productname,
                    images: [product.image] // Uncomment and use if you have product images
                },
                unit_amount: product.productprice * 100,
            },
            quantity: product.quantity || 1, // Ensure you handle quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            
            success_url: "http://localhost:3000/delivery",
            cancel_url: "http://localhost:3000/product",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//===========================

//======================= Orders==============

const orderdetails = new mongoose.Schema({
    productid:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true,
    },
    productprice:{
        type:Number,
        required:true
    },
     image:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    status: {
        type:String,
        default: "Ready for Delivery"
    }
})

const OrderDetails = mongoose.model("orders",orderdetails)

app.post("/orderpost",async(req,res)=>{
    // console.log(req.body)
    const resp = req.body;
    const arr = resp.cartItems
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        try {
            const item = new OrderDetails(arr[i])
            const saved = await item.save()
            res.status(200).json({message:"added",saved})
        } catch (error) {
        console.log(error) 
        }
    }
})

app.get("/orderget",async(req,res)=>{
    try {
        const resp = await OrderDetails.find();
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
})

app.get("/ordergetbyid/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        // const val = await OrderDetails.findById(id)
        const vals = await OrderDetails.findById(id)
        res.status(200).json(vals)
    } catch (error) {
        console.log(error)
    }
})

app.put("/ordersupdate/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const sr = await OrderDetails.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"update",sr})
    } catch (error) {
        console.log(error)
    }
})


app.get("/orderdetailsbyusernmae/:username",async(req,res)=>{
    const user = req.params.username;
    try {
        const resp = await OrderDetails.find({username:user})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
})
app.delete("/deleteorder/:id",async(req,res)=>{
    const user = req.params.id;
    try {
        const vl = await OrderDetails.findByIdAndDelete(user)
        res.status(200).json({message:"succesfully deleted"})
    } catch (error) {
        console.log(error)
    }
})
//----------------------------------address---------------------------

const addressschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

const AddressSchema = mongoose.model('address',addressschema);


app.post("/addresspost",async(req,res)=>{
    const value = req.body;
    const username = req.body.username;
    try {
       
        const getval = await AddressSchema.find({username:username})
        //console.log(getval)
        if(getval.length===0)
            {
                const vals = new AddressSchema(value);
                const resp = await vals.save();
                res.status(200).json(resp)
            }
            else
            {
                res.status(409).json({ message: "User address already exists" });
            }
        
    } catch (error) {
        console.log(error);
    }
})

// app.post("/addresspost")

app.get("/addressget/:username",async(req,res)=>{
    const username = req.params.username;
    try {
        const vals = await AddressSchema.find({username:username})
        res.status(200).json(vals)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal error"})
    }
})
app.get("/addressgetbyid/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const vals = await AddressSchema.findById(id)
        res.status(200).json(vals)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal error"})
    }
})

app.put("/addresspost/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const reps = await AddressSchema.findByIdAndUpdate(id,req.body);
        res.status(200).json({message:"succesfully updated",reps});
    } catch (error) {
        console.log(error);
    }
})

app.get("/addressallget",async(req,res)=>{
    try {
        const reps = await AddressSchema.find();
        res.status(200).json(reps)
    } catch (error) {
        console.log(error);
    }
})

/////////////////////////////
  app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
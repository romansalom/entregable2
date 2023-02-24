import mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new mongoose.Schema  ({

    products: {

      type: [

        {

          product: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "products",

          },

          quantity: {

            type: Number,

          }

        },

      ],

      required: true,

      default: [],

  },
},
{versionKey : false}
);
cartSchema.pre("find" , function (){
  this.populate("products.porduct");
});
cartSchema.pre("findOne" , function (){
  this.populate("products.porduct");
})


export const cartModel = mongoose.model(cartCollection, cartSchema);
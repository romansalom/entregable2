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

export const cartModel = mongoose.model(cartCollection, cartSchema);
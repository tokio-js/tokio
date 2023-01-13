import tokiojs from "../../src/lib";
const { OOP } = tokiojs.load("OLDCONSOLE");

let klazz = OOP._Struct$("StructName")// Contructor
    .set(// Declare AND Define new property
        "PropertyName",// Name of Property
        "Property_value"// Value of the property
    )// End of property definition, you may chain multiple after each other
.build()// Builds the Struct, required if you would like to use it

console.log(klazz["__struct__"])
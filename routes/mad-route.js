import { addNewMad } from '../controllers/mad-controller';
import  { gatAllMad } from '../controllers/mad-controller';
import { gatOneMad } from '../controllers/mad-controller';
const routes = (app) => {
    app.route('/mad-request')
    .get(gatAllMad)
    .post(addNewMad)
    .put((req,res)=>{
        res.send('Hello World');
    })
    .delete((req,res)=>{
        res.send('Hello World');
    });

    app.route('/mad-request/:id')
    .get(gatOneMad)

}


export default routes;
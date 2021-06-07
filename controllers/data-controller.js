const HttpError = require('../middleware/http-error');
const fetch = require('node-fetch');
const { default: axios } = require('axios');

const getData=async(req,res,next)=>{
   
    let arrayData=[];
    try {
      const {data}= await axios.get('https://api.wazirx.com/api/v2/tickers')
      
        let i=0;
            
        Object.values(data).map((item)=>{
          
            i++;
            if(i<10){
                arrayData.push(item);
            }else{
                return
            }
        })
    
      res.status(200).send(arrayData)//.........


      } catch (err) {
        const error = new HttpError(
          'Something went wrong,.',
          500
        );
        return next(error);
      }
      
     

 
            
      
        };

exports.getData=getData;
 import $ from 'jquery'
  export function CreateGateway(userId,paymentMethod,X_Csrf_Token) {
     const user = {
         userId,
         paymentMethod,
     };

     return new Promise((resolve,reject)=>{
     const headers = {};
     const CSRF_TOKEN_HEADER_NAME = 'X-Csrf-Token';
  // headers[CSRF_TOKEN_HEADER_NAME] = CsrfHelper.get();
     headers[CSRF_TOKEN_HEADER_NAME] = 'cdee38f26348255e8a4681bb0814806b' ;
     let request_parameters = {
         url : 'https://artur.igms.com/api/gateway/create-gateway',
         type : "POST",
         dataType : 'json',
         data:user,
         global : false,
         headers
     };
    $.ajax(request_parameters)
        .then(res => {console.log(JSON.parse(res),'ress creategateway');
            const myres={
                status: "OK",
                data: {
                    success: false,
                    message: "Client error: `POST https://d36276b6.ngrok.io/gateways?apiKey=api_key` resulted in a `404 Not Found` response:\nTunnel d36276b6.ngrok.io not found\n"
                },
                "version": 83686,
                "scopeData": []
            }
           if( myres.data.success === true){
                           console.log(myres,'resssss');
                          resolve (myres);
                      }else{
                          debugger;
                          throw new Error(myres.data.message)
                      }
                      })
                  .catch(er => {debugger;
                      console.log(er,'errrrrrrr');
                      reject(er);

        });
     })
}
export function DeleteGetway(gatewayId,X_Csrf_Token) {
    return new Promise((resolve, reject) =>{
        fetch('https://artur.igms.com/api/gateway/delete-gateway', {
            method: 'DELETE',
            body: JSON.stringify(gatewayId),
            mode: 'no-cors',
            headers: {
                "Content-type": "application/json",
                "X-Csrf-Token": X_Csrf_Token,
            }
        })
            .then(res => resolve(res))
            .catch(er => reject(er))

        }
    )

}

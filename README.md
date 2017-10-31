Ethereum Balance from third party API

A ES6 NodeJS app that uses async/await

Please develop a simple NodeJS Express app with a Jade (Pug) view/page to
get the balance of an Ethereum address. It will need to perform a single
external request (to an API that provides such data) using a
promise-enabled library and async/await.

The view/page needs to have a form that when submitted will add an
"address" GET request parameter to the url. The form will have only one
text input field (labeled "Address"), representing the Ethereum address.
The express route that responds to the form request (can be the same route
or you can make two) needs to query an external API service
(Blockcypher.com) using the current JSON API URL: "
https://api.blockcypher.com/v1/eth/main/addrs/ADDRESS/balance".

Example of the request (using curl):

curl -s
https://api.blockcypher.com/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012/balance

Blockchypher endpoint documentation:

https://dev.blockcypher.com/eth/ > Address API > Address Balance
Endpoint

The route will need to make the request using the following two libraries:
Axios and Async/Await.

Axios: https://github.com/mzabriskie/axios
Async/Await: https://github.com/yortus/asyncawait
If you don't like Axios you can chose whichever promise-based library you
prefer.

The page rendered from the GET response will display the balance of the
address, a numeric value denominated in ETH, Ethers. In the case of the
'738d145faabb1e00cf5a017588a9c0f998318012' address the 'balance' value
coming from the API is '19254563000000000' and it's the one to use. That
balance will need to be displayed in Ether instead of Weis (1 Ether ==
10^18 Weis) meaning that for that address it should show a balance of
'0.019254563' ETHs.

Ethereum values converter:
https://converter.murkin.me/

There's no need to work on the UI part (CSS and such), just forum/values
displayed in a unstyled HTML page are ok.

The app needs to be developed using ES6 even if it's not required to use
all the features ES6 offers. It is preferred to use "template strings" and
"arrow functions" ES6 features and there's no need to use babel as node
supports ES6.

The test shouldn't take a long time to write (30 minutes or less), but we
don't want to give you a time limit for completing the test. I can guess
that the only thing that will take time/effort will be understanding
async/await if you haven't seen it before.

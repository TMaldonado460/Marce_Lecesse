var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://dev-t-62nrhl.us.auth0.com/oauth/token",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "data": "{\"client_id\":\"kj87nrYaQkpZXih6ikzwDNz0ZkLTf4lb\",\"client_secret\":\"soocSJtgyYbi0Jtu9QH0bgpzVQBaCr9t1w4cO06GY083nhBttQvYMtMeVl3bZxvr\",\"audience\":\"https://dev-t-62nrhl.us.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
  }

fetch("https://dev-t-62nrhl.us.auth0.com/oauth/token", {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "content-type": "application/json"
    },
    "data": "{\"client_id\":\"kj87nrYaQkpZXih6ikzwDNz0ZkLTf4lb\",\"client_secret\":\"soocSJtgyYbi0Jtu9QH0bgpzVQBaCr9t1w4cO06GY083nhBttQvYMtMeVl3bZxvr\",\"audience\":\"https://dev-t-62nrhl.us.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
}).then(data => console.log(data))
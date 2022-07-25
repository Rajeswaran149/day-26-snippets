//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import Card from './Card.js';
import Header from './Header';
import './Header.css';


const data = [
  {
  name: "Free",
  price: "$0",
  duration: "/month",
  features: [
    {
      name: "Single User",
      value: "true"
    },
    {
      name: "5GB Storage",
      value: "true"
    },
    {
      name: "Unlimited Public Projects",
      value: "true"
    },
    {
      name: "Community Access",
      value: "true"
    },
    {
      name: "Unlimited Private Projects",
      value: "false"
    },
    {
      name: "Dedicated Phone Support",
      value: "false"
    },
    {
      name: "Free Subdomain",
      value: "false"
    },
    {
      name: "Monthly Status Reports",
      value: "false"
    }
  ]
},
{
  name: "Plus",
  price: "$9",
  duration: "/month",
  features: [
    {
      name: "5 User",
      value: "true",
      isBold: "true"
    },
    {
      name: "50GB Storage",
      value: "true"
    },
    {
      name: "Unlimited Public Projects",
      value: "true"
    },
    {
      name: "Community Access",
      value: "true"
    },
    {
      name: "Unlimited Private Projects",
      value: "true"
    },
    {
      name: "Dedicated Phone Support",
      value: "true"
    },
    {
      name: "Free Subdomain",
      value: "true"
    },
    {
      name: "Monthly Status Reports",
      value: "false"
    }
  ]

},
{
  name: "Pro",
  price: "$49",
  duration: "/month",
  features: [
    {
      name: "Unlimited Users",
      value: "true",
      isBold: "true"
    },
    {
      name: "150GB Storage",
      value: "true"
    },
    {
      name: "Unlimited Public Projects",
      value: "true"
    },
    {
      name: "Community Access",
      value: "true"
    },
    {
      name: "Unlimited Private Projects",
      value: "true"
    },
    {
      name: "Dedicated Phone Support",
      value: "true"
    },
    {
      name1: "Unlimited",
      name: "Free Subdomain",
      value: "true",

    },
    {
      name: "Monthly Status Reports",
      value: "true"
    }
  ]
}

]

function App() {
  return (
 <>
 <Header></Header>
   <section className="pricing py-5">
   <div className="container">
    <div className="row">
       {data.map((card) => {
        return (
          <Card data={card} />
        )
      })}
    </div>
  </div>
  </section>
 </>
  );
}

export default App;

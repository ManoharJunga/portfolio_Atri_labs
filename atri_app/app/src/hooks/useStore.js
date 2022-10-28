import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Header": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex_13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "TextBox2": {
      "custom": {
        "text": " I am a front end developer in India. I'm passionate about software development. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "My work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Interested in working together? Get in touch today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home": {
      "custom": {
        "text": "Manohar Junga"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Menu": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": false,
        "strokeColor": "#000000",
        "gap": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "About me"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/manoharjunga"
            }
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "I'm Manohar and I design user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "",
        "src": "/app-assets/Untitled%20design.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/manoharjunga"
            }
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Green%20Gradient%20Application%20Showcase%20Presentation.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/profoodsapp"
            }
          }
        ]
      }
    },
    "Carousel2": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Profoods App - IOS App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "App design for Food Ordering App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Profoods App allows customers to place orders directly from your iPhone. He or she can select items from the app, place order by simply entering your name in the box given below. Profoods has it's vital to think over the variety of steps and clear navigation that will enable users to quickly make and get the order under diverse circumstances."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Profoods App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/LekhArt.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "LekhArt Shopping"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "LekhArt - Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Website design for LekhArt Shopping Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "React is a great JavaScript framework to build an e-commerce web app. It has a big & active community, is component-based, supports server-side rendering, uses virtual DOM, just to mention a few. These features make React.js the perfect choice for a fast, scalable, and user-friendly e-commerce website."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/QR%20scanner.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "QR scanner Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "QR Scanner - Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Website design for QR Scanner  a  software website "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "This website is done using HTML and CSS. It is a basic design for a software company. This can show the product details and it's information. Cool Animation is also added using javascript."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/manoharjunga"
            }
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": " I Specialize in UI/UX Design, IOS app, Responsive Web Design, and Blender Animation"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "About me ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/manoharjunga"
            }
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ux-design.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "I enjoy creating user centric, delightful. As a professional product designer, I've managed projects from drinkware to furniture, from the ideation of a concept to a manufactured product. With my experience & guidance, your ideas will come to life!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ux.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": " I enjoy creating a amazing websites using javascript, HTML and CSS. I create  website user-friendly to use, interactive, branding etc..."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/app-store.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "IOS App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "I have created some Amazing software apps like ecommerce and food ordering app using Xcoder.  I like to design some interactive interference with the customers."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Logo Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "I have a very creative mind in creating crazy logos, that looks professional to represent a company."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/animation.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Blender Animation"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "I enjoy being creative and making new things. Animators use creative skills almost daily to form story ideas and develop new ways of drawing or animating stories."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Copyright © Manohar Junga | Designed By Junga Leela Manohar"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-app-symbol.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.facebook.com/leelamanohar.junga.5/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instagram.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/leelamanoharjunga/?hl=en",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/in/leela-manohar-junga-061280241/",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/ManoharJunga",
              "target": "_blank"
            }
          }
        ]
      }
    }
  },
  "manoharjunga": {
    "Flex36": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "About me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Specializing in branding and UI/UX design, I enjoy creating user centric, delightful. As a professional product designer, I've managed projects from drinkware to furniture, from the ideation of a concept to a manufactured product. With my experience & guidance, your ideas will come to life! I have created some Amazing software apps like ecommerce and food ordering app using Xcoder. I like to design some interactive interference with the customers."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Manohar Junga"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "App design"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/profoodsapp"
            }
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "I'm Junga Manohar designer based in India, Andhra Pradesh"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "The core values that drive my work"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/idea.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "Innovation"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Innovation is all about the madness of solving problems and doing things in a better way. I like to do it every day like a challenge."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/teamwork.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Team Work"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "I like to work with a group of people in order to achieve a goal. Teamwork is often a crucial part of a business, as it is often necessary for colleagues to work well together, trying their best in any circumstance."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ok.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Perfection"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "I insist on perfection and accept nothing shy of flawlessness. I have excessively high personal standards and overly critical self-evaluations."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/growth.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Growth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "I like to learn new coding languages. I like to see a growth in business with my coding experience. I like to interact with customers to understand their problem and solve it."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ux-design.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/animation.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Blender Animation"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "I enjoy being creative and making new things. Animators use creative skills almost daily to form story ideas and develop new ways of drawing or animating stories."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Copyright © Manohar Junga | Designed By Junga Leela Manohar"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-app-symbol.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://whttps://www.facebook.com/leelamanohar.junga.5/ww.facebook.com/leelamanohar.junga.5/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instagram.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.instagram.com/leelamanoharjunga/?hl=en",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/in/leela-manohar-junga-061280241/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https:https://github.com/ManoharJunga//github.com/ManoharJunga",
              "target": "_blank"
            }
          }
        ]
      }
    }
  },
  "profoodsapp": {
    "Flex51": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "TextBox60": {
      "custom": {
        "text": "App design for food ordering App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Profoods App is developed using Xcode for IOS Apps"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lines.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Manohar Junga"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "About me"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/manoharjunga"
            }
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Food delivery is something most of us can't leave without. The pandemic and safety regulations made applications like UberEats even more popular. Now, to taste their favorite meal, restaurant guests place an order and wait for a courier to deliver it.    Moreover, food orders are the only way for restaurants to earn money, while dine-ins are prohibited in numerous countries, including the U.S."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "",
        "src": "/app-assets/Green%20Gradient%20Application%20Showcase%20Presentation.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Loading screen shows the different feature performed in this food app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Simulator%20Screen%20Shot%20-%20iPhone%2014%20Pro%20-%202022-09-24%20at%2009.01.48.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Placeholder UI launch screens display a non-interactive preview of the app's actual UI. This launch screen is appropriate for both app launches and activity transitions within an app. Their will be a little logo animation for logo branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "A consumer will get recommendations of nearby restaurants or some special orders for the day. Right from restaurant selection to checkout and payment, the consumer is at the lead.  The users know how to create a basket of the desired items in the food ordering app."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Simulator%20Screen%20Shot%20-%20iPhone%2014%20Pro%20-%202022-09-24%20at%2009.02.09.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;

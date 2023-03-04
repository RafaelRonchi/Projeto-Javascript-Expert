import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core@4.2.0/dist/tf-core.min.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@3.7.0/dist/tf-backend-webgl.min.js"
import "https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/hands.min.js"
import "https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection@2.0.0/dist/hand-pose-detection.min.js"
import "https://cdn.jsdelivr.net/npm/fingerpose@0.1.0/dist/fingerpose.min.js"
import "./../../lib/sdk.js"

import CardsController from "./../controllers/cardsController.js"
import CardsView from "./../views/cardsView.js"
import CardsService from "./../services/cardsService.js"

const cardListWorker = new Worker(`./src/workers/cardListWorker.js`, {type: "module"})


cardListWorker.postMessage('Hello world')
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return CardsController.initialize({
  
      view: new CardsView(),
      service: new CardsService({ 
        dbUrl: `${rootPath}/assets/database.json`,
        cardListWorker
      })
    })
  }
}

export default factory
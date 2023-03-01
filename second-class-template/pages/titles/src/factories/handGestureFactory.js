import handGestureController from "../controllers/handGestureController"
import handGestureService from "../services/handGestureService"
import handGestureView from "../views/handGestureView"

const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return handGestureController.initialize({
      view: new handGestureView(),
      service: new handGestureService()
    })
  }
}

export default factory
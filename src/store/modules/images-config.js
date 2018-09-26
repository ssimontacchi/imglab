const state = {
  imgSelected: "",
  selectedElements: [],
  copiedElements: [],
  selectedTool: null,
  selectedElement: null,
  alreadyDrawing: false
};

const mutations = {
  /**
   * Sets selected image by name
   * @param {string} imgSelected - name of image selected
   */
  setImgSelected(state, { imgSelected = "" } = {}) {
    state.imgSelected = imgSelected;
  },

  /**
   * Sets the copied elements into an array
   * @param {shape[]} copiedElements - array of shape data
   */
  setCopiedElements(state, { copiedElements = [] } = {}) {
    state.copiedElements = copiedElements;
  },

  /**
   * Assign selected tool
   * @param {Object} selectedTool
   */
  setSelectedTool(state, { selectedTool = null } = {}) {
    state.selectedTool = selectedTool;
  },

  /**
   * Assign currently selected element
   * @param {SVGElement} selectedElement - currently selected SVGElement on the canvas
   */
  setSelectedElement(state, { selectedElement = null } = {}) {
    state.selectedElement = selectedElement;
  },

  /**
   * Assign selected elements
   * @param {SVGElement[]} selectedElements - array of SVGElements that are selected on the canvas
   */
  setSelectedElements(state, { selectedElements = [] } = {}) {
    state.selectedElements = selectedElements;
  },

  /**
   * Toggle to draw/stop
   * @param {boolean} alreadyDrawing - true if drawing, false otherwise
   */
  setAlreadyDrawing(state, { alreadyDrawing = false } = {}) {
    state.alreadyDrawing = alreadyDrawing;
  },

  /**
   * Intialize the state of the image
   * @param {string} imgSelected - name of the selected image
   * @param {shape[]} copiedElements - array of copied shapes
   * @param {object} selectedTool - selected tool
   * @param {SVGElement} selectedElement - selected shape, used to show label data
   * @param {SVGElement[]} selectedElements - array of selected SVGElements
   * @param {boolean} alreadyDrawing - toggle to draw/stop
   */
  init(
    state,
    {
      imgSelected = "",
      copiedElements = [],
      selectedTool = null,
      selectedElement = null,
      selectedElements = [],
      alreadyDrawing = false
    } = {}
  ) {
    state = {
      imgSelected,
      copiedElements,
      selectedTool,
      selectedElement,
      selectedElements,
      alreadyDrawing
    };
  }
};

const getter = {
  /**
   * Returns iamge selected
   * @returns {string} image selected
   */
  getImgSelected: state => {
    return state.imgSelected;
  },

  /**
   * Returns an array of copied elements
   * @returns {shape[]} array of copied elements
   */
  getCopiedElements: state => {
    return state.copiedElements;
  },

  /**
   * Returns selected tool
   * @returns {object} tool selected
   */
  getSelectedTool: state => {
    return state.selectedTool;
  },

  /**
   * Returns a selected element
   * @returns {SVGElement} selected element
   */
  getSelectedElement: state => {
    return state.selectedElement;
  },

  /**
   * Returns an array of selected elements
   * @returns {SVGElement[]} array of selected element
   */
  getSelectedElements: state => {
    return state.selectedElements;
  },

  /**
   * Returns a boolean variable to check if currently drawing
   * @returns {boolean} true if currently drawing, false otherwise
   */
  getAlreadyDrawing: state => {
    return state.alreadyDrawing;
  },

  /**
   * Returns the config Object
   * @returns {Object} config object
   */
  getConfig: state => {
    return state;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getter
};

export class Counter {
    constructor(elementId) {
      this.element = document.getElementById(`counter${elementId}`);
      this.value = 0;
      this.updateValue();
    }
  
    increment() {
      this.value++;
      this.updateValue();
    }
  
    decrement() {
      if (this.value > 0) {
        this.value--;
        this.updateValue();
      }
    }
  
    updateValue() {
      this.element.textContent = this.value;
    }
  
    init(id) {
      console.log('creating counters');
  
      // Get references to the increment and decrement buttons for the counter
      const incrementBtn = document.getElementById(`increment${id}`);
      const decrementBtn = document.getElementById(`decrement${id}`);
  
      // Event listeners for the increment and decrement buttons of the counter
      incrementBtn.addEventListener('click', () => {
        this.increment(); // Use 'this' to refer to the current Counter instance
      });
  
      decrementBtn.addEventListener('click', () => {
        this.decrement(); // Use 'this' to refer to the current Counter instance
      });
    }
  }
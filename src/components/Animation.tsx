const EL = {
    LEFT: '.js-left-slice',
    RIGHT: '.js-right-slice',
    LEFT_FILL: '#js-left-fill',
    RIGHT_FILL: '#js-right-fill',
    BURST: '#js-burst' };
  
  
  const DURATIONS = {
    JOIN: 800,
    SLIDE: 350,
    BURST: 1200,
    COMBINE: 300,
    SLIDE_OFF: 300 };
  
  
  const TIME = {
    JOIN_X: DURATIONS.JOIN,
    get JOIN() {
      return this.JOIN_X + DURATIONS.JOIN - 100;
    },
    get SLIDE() {
      return DURATIONS.SLIDE;
    },
    get BURST() {
      return this.SLIDE + DURATIONS.BURST;
    },
    get COMBINE() {
      return this.BURST + DURATIONS.COMBINE;
    },
    get PULL_Y() {
      return this.COMBINE + DURATIONS.JOIN;
    } };
  
  
  const timeline = anime.timeline({
    loop: true,
    elasticity: 0 });
  
  
  const at = (offset, obj) => ({ ...obj, offset });
  
  const leftSlice = {
    easing: 'easeInOutQuint',
    targets: EL.LEFT,
    translateX: [
    { value: -10, duration: 1 },
    { value: 0, duration: DURATIONS.JOIN },
    {
      value: -10,
      duration: DURATIONS.COMBINE,
      delay: TIME.BURST - DURATIONS.JOIN,
      easing: 'easeOutQuint' }],
  
  
    translateY: [
    { value: -28, duration: 1 },
    { delay: TIME.JOIN_X, value: 0, duration: DURATIONS.JOIN },
    {
      delay: TIME.COMBINE - TIME.JOIN,
      value: -28,
      duration: DURATIONS.JOIN }] };
  
  
  
  
  const leftFill = {
    easing: 'easeInOutQuint',
    targets: EL.LEFT_FILL,
    translateX: [
    { value: -10, duration: 1 },
    { value: 0, duration: DURATIONS.JOIN },
    {
      value: -10,
      duration: DURATIONS.COMBINE,
      delay: TIME.BURST - DURATIONS.JOIN,
      easing: 'easeOutQuint' }],
  
  
    translateY: [
    { value: -28, duration: 1 },
    { delay: TIME.JOIN_X, value: 0, duration: DURATIONS.JOIN },
    {
      delay: TIME.COMBINE - TIME.JOIN,
      value: -28,
      duration: DURATIONS.JOIN }] };
  
  
  
  
  const rightSlice = {
    easing: 'easeInOutQuint',
    targets: EL.RIGHT,
    translateX: [
    { value: 10, duration: 1 },
    { value: 0, duration: DURATIONS.JOIN },
    {
      value: 10,
      duration: DURATIONS.COMBINE,
      delay: TIME.BURST - DURATIONS.JOIN,
      easing: 'easeOutQuint' }],
  
  
    translateY: [
    { value: 28, duration: 1 },
    { delay: TIME.JOIN_X, value: 0, duration: DURATIONS.JOIN },
    {
      delay: TIME.COMBINE - TIME.JOIN,
      value: 28,
      duration: DURATIONS.JOIN }] };
  
  
  
  
  const rightFill = {
    easing: 'easeInOutQuint',
    targets: EL.RIGHT_FILL,
    translateX: [
    { value: 10, duration: 1 },
    { value: 0, duration: DURATIONS.JOIN },
    {
      value: 10,
      duration: DURATIONS.COMBINE,
      delay: TIME.BURST - DURATIONS.JOIN,
      easing: 'easeOutQuint' }],
  
  
    translateY: [
    { value: 28, duration: 1 },
    { delay: TIME.JOIN_X, value: 0, duration: 800 },
    {
      delay: TIME.COMBINE - TIME.JOIN,
      value: 28,
      duration: DURATIONS.JOIN }] };
  
  
  
  
  timeline.
  add(at(0, leftSlice)).
  add(at(0, leftFill)).
  add(at(0, rightSlice)).
  add(at(0, rightFill));
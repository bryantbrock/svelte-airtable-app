<div class='spinner' />


<style>
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  @-webkit-keyframes spinner {
    to {-webkit-transform: rotate(360deg);}
  }
  .spinner {
    min-width: 30px;
    min-height: 30px;
    position: relative;
    text-align: center;
  }
  .spinner:before {
    content: 'Loading…';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13px;
    margin-left: -13px;
    width: 30px;
    height: 30px
  }
  .spinner:not(:required):before {
    content: '';
    border-radius: 50%;
    border: 1.5px solid #5c5c5c;
    border-top-color: #45454500;
    animation: spinner .6s linear infinite;
    -webkit-animation: spinner .6s linear infinite;
  }
</style>
// Placeholder handler. Remove once the form posts to a real email provider.
function seedSignup(e){
  var f=e.target;
  if(f.getAttribute('action')!=='#') return true;
  e.preventDefault();
  f.hidden=true;
  document.getElementById('form-msg').hidden=false;
  return false;
}

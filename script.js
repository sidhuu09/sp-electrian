function login(event){
  event.preventDefault();
  const message=document.getElementById('loginMessage');
  message.textContent='Login demo: account authentication can be connected later.';
  message.style.color='#1254a5';
}

document.addEventListener('DOMContentLoaded', function(){
  const form=document.getElementById('bookingForm');
  if(!form) return;
  const date=document.getElementById('bookDate');
  date.min=new Date().toISOString().split('T')[0];
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name=document.getElementById('bookName').value.trim();
    const phone=document.getElementById('bookPhone').value.trim();
    const service=document.getElementById('service').value;
    const bookingDate=document.getElementById('bookDate').value;
    const time=document.getElementById('bookTime').value;
    const address=document.getElementById('bookAddress').value.trim();
    const problem=document.getElementById('bookMessage').value.trim();
    const text=`SP ELECTRICIAN - Online Booking%0A%0AName: ${name}%0AMobile: ${phone}%0AService: ${service}%0ADate: ${bookingDate}%0ATime: ${time}%0AAddress: ${address}%0AProblem: ${problem || 'Not specified'}`;
    window.open(`https://wa.me/918144722094?text=${text}`,'_blank');
    document.getElementById('bookingStatus').textContent='Booking details prepared for WhatsApp.';
    document.getElementById('bookingStatus').style.color='#1254a5';
  });
});

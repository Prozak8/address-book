const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.querySelector('.contact-list')
  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')
    ul.className = "list-reset";
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
      <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://www.bestfunnies.com/wp-content/uploads/2012/11/Ugly-Face-Man-2.jpg" />
          <div class="text-center sm:text-left sm:flex-grow content">
            <div class="mb-4">
              <h1 class="text-xl leading-tight">${contact.name}</h1>
              <h2 class="text-sm leading-tight text-grey-dark">${contact.company}</h2>
              <p class="text-sm leading-tight text-grey-dark">${contact.notes}</p>
              <p class="text-sm leading-tight text-red">${contact.email}</p>
              <a class="text-sm leading-tight text-grey-dark" href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
            </div>
          </div>
        </div>
      </div>
    `
    ul.appendChild(li)
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

  document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
   
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset()
  })
  })


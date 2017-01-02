export default function() {
  this.namespace = '/api';

  this.get('/schools', function() {
    return {
      data: [{
        type: 'school',
        id: 'dps',
        attributes: {
          name: 'dps',
          location: 'delhi',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'nssps',
        attributes: {
          name: 'nssps',
          location: 'agra',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'jhs',
        attributes: {
          name: 'jhs',
          location: 'agra',
          medium: 'hindi'
        }  
      },{
        type: 'school',
        id: 'kv',
        attributes: {
          name: 'kv',
          location: 'noida',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'mvbic',
        attributes: {
          name: 'mvbic',
          location: 'agra',
          medium: 'hindi'
        }  
      },{
        type: 'school',
        id: 'sjhs',
        attributes: {
          name: 'st johns high school',
          location: 'agra',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'sjhs2',
        attributes: {
          name: 'st johns high school',
          location: 'lucknow',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'smhs',
        attributes: {
          name: 'st mary high school',
          location: 'lucknow',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'sphs',
        attributes: {
          name: 'st peter high school',
          location: 'agra',
          medium: 'english'
        }  
      },{
        type: 'school',
        id: 'sths',
        attributes: {
          name: 'st thomas high school',
          location: 'agra',
          medium: 'english'  
        }    
      }]
    };
  });

  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          type: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });
}
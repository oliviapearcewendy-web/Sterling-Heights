document.addEventListener('DOMContentLoaded', () => {
  const projects = {
    willow: {
      title: 'The Willow Residences', status: 'COMPLETED · AUSTIN, TEXAS',
      description: 'A quiet expression of modern residential design.',
      overview: 'The Willow Residences pairs generous interiors, natural textures, and considered landscaping in a welcoming Austin residential community.', photo: 'willow'
    },
    cedar: {
      title: 'The Willow Residences', status: 'COMPLETED · AUSTIN, TEXAS',
      description: 'A quiet expression of modern residential design.',
      overview: 'The Willow Residences pairs generous interiors, natural textures, and considered landscaping in a welcoming Austin residential community.', photo: 'willow'
    },
    skyline: {
      title: 'Skyline Gardens', status: 'IN PROGRESS · DENVER, COLORADO · 68%',
      description: 'A fresh perspective on modern apartment living.',
      overview: 'Skyline Gardens is a Denver residential development focused on natural light, useful shared spaces, and contemporary city living.', photo: 'skyline'
    },
    terrace: {
      title: 'The Terrace Collection', status: 'COMPLETED · CHARLOTTE, NORTH CAROLINA',
      description: 'Thoughtful townhouses designed for everyday life.',
      overview: 'A collection of elegant Charlotte townhouses that balance privacy, comfort, and a strong connection to the outdoors.', photo: 'terrace'
    },
    oak: {
      title: 'Oakview House', status: 'COMPLETED · SCOTTSDALE, ARIZONA',
      description: 'Comfortable family living with timeless lines.',
      overview: 'Oakview House combines practical family spaces with enduring design in a quiet Scottsdale neighborhood.', photo: 'oakview'
    },
    cedarcourt: {
      title: 'Cedar Court', status: 'IN PROGRESS · RALEIGH, NORTH CAROLINA · 42%',
      description: 'Contemporary homes with room to grow.',
      overview: 'Cedar Court is a Raleigh community being developed around everyday comfort, quality materials, and considered landscaping.', photo: 'cedarcourt'
    }
  };
  const key = new URLSearchParams(location.search).get('project') || 'willow';
  const project = projects[key] || projects.willow;
  document.getElementById('title').textContent = project.title;
  document.getElementById('status').textContent = project.status;
  document.getElementById('description').textContent = project.description;
  document.getElementById('overview').textContent = project.overview;
  document.getElementById('projectPhoto').className = 'photo ' + project.photo;
});

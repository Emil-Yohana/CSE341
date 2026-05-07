const data = {
    professionalName: 'Emily',
    firstName: 'Emily',
    nameLink: 'www.linkedin.com/in/emily',
    primaryDescription: 'I am a software developer with experience in full stack development.',
    workDescription1: 'I have worked on various projects using JavaScript, React, and Node.js.',
    workDescription2: 'I am passionate about learning new technologies and improving my skills.',
    linkTitleText: 'Connect with me:',
    linkedInLink: {
      text: 'LinkedIn',
      link: 'www.linkedin.com/in/emily',
    },
    githubLink: {
      text: 'GitHub',
      link: 'www.github.com/emily',
    },
  }

exports.getData = (req, res) => {
    res.status(200).json(data);
}
class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
    this.ConnectMoreInfoButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = documen.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItems of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  switchProject(projectId) {
    // const projetIndex = this.projects.findIndex(p => p.id === projectId );
    // this.projects.splice(projetIndex, 1);
    this.addProject();
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishProjectsoList = new ProjectList("finished");
  }
}

App.init();

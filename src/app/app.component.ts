import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person-circle'
    },
    {
      title: 'Outras trilhas',
      url: '/trilha',
      icon: 'trail-sign'
    },
    {
      title: 'Minha trilha',
      url: '/trilhafocada',
      icon: 'stats-chart'
    },
    {
      title: 'Notificações',
      url: '/notificacao',
      icon: 'warning'
    },
    {
      title: 'Desafios',
      url: '/desafios',
      icon: 'extension-puzzle'
    },
    {
      title: 'Vagas Emprego',
      url: '/vagas',
      icon: 'briefcase'
    },
    {
      title: 'Comunidades',
      url: '/comunidades',
      icon: 'chatbubbles'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

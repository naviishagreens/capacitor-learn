import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { bindCallback, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Dialog} from '@capacitor/dialog'

@Component({
  selector: 'app-geo-page',
  templateUrl: './geo-page.component.html',
  styleUrls: ['./geo-page.component.scss'],
})
export class GeoPageComponent implements OnInit {
  loc!: Position;
  coords!: GeolocationCoordinates;
  constructor() {}

  ngOnInit(): void {
    this.watchPosition().subscribe( coords => {
      console.log('changing position', coords);
      this.coords = coords;
    });
  }

  async getCurrentPosition() {
    this.loc = await Geolocation.getCurrentPosition();
  }

  showPosition() {
    this.getCurrentPosition().then((x) => {
      console.log(x, this.loc);
      window.alert(this.loc);
    });
  }


  showPos() {
    const lat = this.coords.latitude;
    const long = this.coords.longitude;
    Dialog.alert({
      title: 'your position',
      message: `Lat: ${lat}, Lng: ${long}`
    })
  }

  watchPosition(): Observable<any> {
    const watch = bindCallback(Geolocation.watchPosition)({});
    return watch.pipe(
      map((pos) => {
        if (pos) {
          return (pos as unknown as Position).coords;
        }

        return undefined;
      })
    );
  }
}

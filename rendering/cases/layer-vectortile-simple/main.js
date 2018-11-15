import Map from '../../../src/ol/CompositeMap.js';
import View from '../../../src/ol/View.js';
import VectorTileSource from "../../../src/ol/source/VectorTile";
import MVT from "../../../src/ol/format/MVT";
import {createXYZ} from "../../../src/ol/tilegrid";
import VectorTileLayer from "../../../src/ol/layer/VectorTile";

new Map({
  layers: [
    new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        tileGrid: createXYZ(),
        url: '/data/tiles/mvt/{z}-{x}-{y}.vector.pbf',
        transition: 0
      })
    })
  ],
  target: 'map',
  view: new View({
    center: [1825927.7316762917, 6143091.089223046],
    zoom: 14
  })
});

render({message: 'Vector tile layer renders'});

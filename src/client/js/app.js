/**
*
*  Online store PWA sample.
*  Copyright 2017 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

import {instance as router} from './router';
import {searchInput} from './search-input';

export default function initApp() {
  // Enable client side routing
  router.enable();

  // Enable service worker.
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
  // Add handlers to initiate search (press return or click magnifying glass)
  searchInput.init();
}

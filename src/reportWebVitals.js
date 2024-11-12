
// module.exports = {
//   // ... other Webpack configuration
//   plugins: [
//     new WebpackPwaManifest({
//       // ... manifest configuration
//     }),
//     new WorkboxPlugin.GenerateSW({
//       // ... workbox configuration
//       clientsClaim: true,
//       skipWaiting: true,
//       runtimeCaching: [
//         {
//           urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
//           handler: 'CacheFirst',
//           options: {
//             cacheName: 'images',
//             expiration: {
//               maxEntries: 30,
//             },
//           },
//         },
//         // ... other caching strategies
//       ],
//       // ... other options
//     }),
//   ],
// };
# Youtubr

Let's build out a youtube frontend with React!

1. Decide on component heirarchy
2. Static Version
3. Decide where state lives
4. Build that

App - searchResults[], selectedVideo
  SearchBar - onChange
  VideoDetail - current video
  VideoList
    VideoListItem

Search as we type in the searchbar
First result -=> Video Detail
All results => Video List
When we click a video in the list, select that video (show it in the detail view)

Todo:
Dropdown menu

## Sample Api Response

```js
`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
```

```js
// const response = [
//   {
//     etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
//     id: { kind: 'youtube#video', videoId: 'KMZ7oOCXfP8' },
//     snippet: {
//       title:
//         'Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth',
//       description:
//         'The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg'
//         }
//       }
//     }
//   },
//   {
//     etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
//     id: { kind: 'youtube#video', videoId: '3Bk6VPWGi1o' },
//     snippet: {
//       title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
//       description:
//         'Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg'
//         }
//       }
//     }
//   }
// ];
```

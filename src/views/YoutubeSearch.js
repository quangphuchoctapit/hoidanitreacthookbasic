import './YoutubeSearch.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'
const YoutubeSearch = () => {
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    const handleSearchYoutube = async () => {
        let res = await axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                key: 'AIzaSyAqjHI81QC9vwXZ8c3_MLlO_QKyJ9UKXCg',
                q: query
            }

        })
        if (res && res.data && res.data.items) {
            let result = []
            let raw = res.data.items
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let obj = {}
                    obj.id = item.id.videoId
                    obj.title = item.snippet.title
                    obj.author = item.snippet.channelTitle
                    obj.description = item.snippet.description
                    obj.createdAt = item.snippet.publishedAt
                    result.push(obj)
                }
                )
            }
            console.log('check result: ', result)
            setVideos(result)
        }
    }
    return (
        <>
            <div className='youtube-container'>
                <div className='search-container'>
                    <input className='search-input' placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} />
                    <span><button className='search-button' onClick={handleSearchYoutube}>Search</button></span>
                </div>
                {videos && videos.length > 0 &&
                    videos.map(item => {
                        return (
                            <div className='search-results' key={item.id}>
                                <div className='left'>
                                    <iframe
                                        className='iframe-size'
                                        src={`https://www.youtube.com/embed/${item.id}`}
                                        title="Playlist Nhạc Lofi Buồn Speed Up Chill này nói chung là buồn | Minme"
                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                                <div className='right'>
                                    <div className='title'>
                                        {item.title}
                                    </div>
                                    <div className='created-at'>
                                        Created At: {moment(`${item.createdAt}`).format('DD-MM-YYYY HH:mm:ss A')}
                                    </div>
                                    <div className='author'>
                                        Author: {item.author}
                                    </div>
                                    <div className='description'>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}


export default YoutubeSearch


// {
//     "kind": "youtube#searchListResponse",
//     "etag": "JqxC1a-2XFr7Hhj7Z9Lil9t51Rw",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 931,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BI3hUAtqyiOL_H1m_qQnyRJgo8w",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "hoMAVLW-66c"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-13T05:00:11Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "[FULL] Khóa Học  React Level Thực Tập - Thực Hành Bài Test React.JS Cho Beginners | Hỏi Dân IT",
//           "description": "Trong video này, chúng ta cùng nhau đi làm một bài test thực tập dành cho sinh viên muốn đi làm thực tế ngoài công ty, sử dụng ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-13T05:00:11Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "HJGy598cq78o4x9XZx-B__xOX6w",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CMigSUq1AIk"
//         },
//         "snippet": {
//           "publishedAt": "2022-11-19T02:36:01Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "Vite và Create React App (Frontend)",
//           "description": "shorts #hoidanit So sánh nhanh về công cụ Vite và Create React App cho ứng dụng React Bạn nào muốn donate hay mua cho ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-11-19T02:36:01Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "b4OBGqMMZqiuKsF2Sz1cQpXL8N4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "FQvgGl1Qr8c"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-25T05:00:08Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "React Dev Sẽ Cần Thay Đổi ? 1m2 20 Dev React.Js",
//           "description": "Với trang tài liệu mới react.dev, react đã định hướng là công cụ dùng ở client lẫn server (hybrid apps). Vì vậy, react dev sẽ cần ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-25T05:00:08Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "6GZbREsdXoZuejdHEtBW3j7tS_Y",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "1kSY7cCo7Q0"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-23T10:00:10Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "Tương Lai Của Dev React.JS | Nên Học Gì Để Không Thất Nghiệp Khi React Thay Đổi ?",
//           "description": "Vào tháng 3, 2023, React chính thức có ngôi nhà mới với địa chỉ https://react.dev, nhà cũ reactjs.org đã được đổi thành ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-23T10:00:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kUt3IIbkaVY6dp8Xtybs_hTKoF0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "XIGx1sfvRoc"
//         },
//         "snippet": {
//           "publishedAt": "2023-08-08T12:45:08Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "[FULL] Khóa Học Next.JS 13 Siêu Cơ Bản Dành Cho Beginners | Học React với Hỏi Dân IT",
//           "description": "Next.js 13 (App routers) sẽ được cover các kiến thức cơ bản nhất trong khóa học này. Bạn nào muốn donate hay mua cho mình ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-08-08T12:45:08Z"
//         }
//       }
//     ]
//   }

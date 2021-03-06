import HomePageViewController from '../tabbar/home/HomePageViewController'
import SearchBar from  '../tabbar/home/view/SearchBar'
import HomePageTitleView from '../tabbar/home/view/HomePageTitleView'
import PostViewController from '../tabbar/post/PostViewController'
import MineViewController from '../tabbar/mine/MineViewController'
import DoctorInfoViewController from '../tabbar/home/DoctorInfoViewController'
import DoctorSearchResultListViewController from '../tabbar/home/DoctorSearchResultListViewController'
import SpecialtyViewController from '../tabbar/home/SpecialtyViewController'
import StateListViewController from '../tabbar/home/StateListViewController'
import CityListViewController from '../tabbar/home/CityListViewController'
import SearchFilterOverlay from '../tabbar/home/view/SearchFilterOverlay'
import GuideViewController from '../tabbar/signInUp/GuideViewController'
import LogInViewController from '../tabbar/signInUp/LogInViewController'
import SignUpViewController from '../tabbar/signInUp/SignUpViewController'
import VerifyAccountViewController from '../tabbar/signInUp/VerifyAccountViewController'
import ResetPasswordViewController from '../tabbar/signInUp/ResetPasswordViewController'
import NewPostViewController from '../tabbar/post/NewPostViewController'
import GalleryViewController from '../tabbar/post/GalleryViewController'
import PostDetailViewController from '../tabbar/post/PostDetailViewController'
import UpdateUserInfoViewController from '../tabbar/mine/UpdateUserInfoViewController'
import SegmentTabView from '../BaseComponents/SegmentTabView'
import MyFavorViewController from '../tabbar/mine/MyFavorViewController'
import MyPostListController from '../tabbar/mine/MyPostListController'
import FeedbackViewController from '../tabbar/mine/FeedbackViewController'
import UpdatePasswordViewController from '../tabbar/mine/UpdatePasswordViewController'
//

Navigation.registerComponent('HomePageViewController', () => HomePageViewController);
Navigation.registerComponent('SearchBar', () => SearchBar);
Navigation.registerComponent('HomePageTitleView', () => HomePageTitleView);
Navigation.registerComponent('PostViewController', () => PostViewController);
Navigation.registerComponent('MineViewController', () => MineViewController);
Navigation.registerComponent('DoctorInfoViewController', () => DoctorInfoViewController)
Navigation.registerComponent('DoctorSearchResultListViewController', () => DoctorSearchResultListViewController);
Navigation.registerComponent('SpecialtyViewController', () => SpecialtyViewController);
Navigation.registerComponent('StateListViewController', () => StateListViewController);
Navigation.registerComponent('CityListViewController', () => CityListViewController);
Navigation.registerComponent('SearchFilterOverlay', () => SearchFilterOverlay);
Navigation.registerComponent('GuideViewController', () => GuideViewController);
Navigation.registerComponent('LogInViewController', () => LogInViewController);
Navigation.registerComponent('SignUpViewController', () => SignUpViewController);
Navigation.registerComponent('VerifyAccountViewController', () => VerifyAccountViewController);
Navigation.registerComponent('ResetPasswordViewController', () => ResetPasswordViewController);
Navigation.registerComponent('NewPostViewController', () => NewPostViewController);
Navigation.registerComponent('GalleryViewController', () => GalleryViewController)
Navigation.registerComponent('PostDetailViewController', () => PostDetailViewController)
Navigation.registerComponent('UpdateUserInfoViewController', () => UpdateUserInfoViewController)
Navigation.registerComponent('SegmentTabView', () => SegmentTabView)
Navigation.registerComponent('MyFavorViewController', () => MyFavorViewController)
Navigation.registerComponent('MyPostListController', () => MyPostListController)
Navigation.registerComponent('FeedbackViewController', () => FeedbackViewController)
Navigation.registerComponent('UpdatePasswordViewController', () => UpdatePasswordViewController)
//

import {Navigation} from 'react-native-navigation';
import {Colors} from '../utils/Styles';

const RouterEntry = {
	guide: () => {
		Navigation.setDefaultOptions({
			statusBar: {
				visible: false,
				style: 'light'
			},
			topBar: {
				visible: false,
				background: {
					color: Colors.theme,
				},
				noBorder: true,
				drawBehind: false,
				leftButtonColor: Colors.white,
				rightButtonColor: Colors.white,
				title: {
					color: Colors.white,
					fontWeight: 'bold',
					fontSize: 16,
				},
				backButton: {
					color: Colors.white,
					title: ''
				}
			},
		});

		Navigation.setRoot({
			root: {
				stack: {
					children: [{
						component: {
							name: "GuideViewController"
						}
					}],
				}
			}
		});
	},
	homePage: () => {
		Navigation.setDefaultOptions({
			statusBar: {
				visible: true,
				style: 'light'
			},
			topBar: {
				background: {
					color: Colors.theme,
				},
				noBorder: true,
				drawBehind: false,
				leftButtonColor: Colors.white,
				rightButtonColor: Colors.white,
				title: {
					color: Colors.white,
					fontWeight: 'bold',
					fontSize: 16,
				},
				backButton: {
					color: Colors.white,
					title: ''
				}
			},
			bottomTabs: {
				visible: true,
				drawBehind: true,
			}
		});

		Navigation.setRoot({
			root: {
				bottomTabs: {
					children: [
						{
							stack: {
								children: [{
									component: {
										name: 'HomePageViewController',
										passProps: {
											text: 'This is tab 1'
										}
									}
								}],
								options: {
									bottomTab: {
										text: 'Finder',
										icon: require('../../resource/image/finder.png'),
										testID: 'finder',
										selectedTextColor: Colors.theme,
										selectedIconColor: Colors.theme,
									}
								}
							}
						},
						{
							stack: {
								children: [{
									component: {
										name: 'PostViewController',
										passProps: {
											text: 'This is tab 1'
										}
									}
								}],
								options: {
									bottomTab: {
										text: 'Post',
										icon: require('../../resource/image/post.png'),
										testID: 'post',
										selectedTextColor: Colors.theme,
										selectedIconColor: Colors.theme,
									},
								}
							}
						},
						{
							stack: {
								children: [{
									component: {
										name: 'MineViewController',
										passProps: {
											text: 'This is tab 1'
										}
									}
								}],
								options: {
									bottomTab: {
										text: 'Mine',
										icon: require('../../resource/image/mine.png'),
										testID: 'mine',
										selectedTextColor: Colors.theme,
										selectedIconColor: Colors.theme,
									}
								}
							}
						}
					]
				},

			}
		})
	},
	modalSignUp() {
		Navigation.showModal({
			stack: {
				children: [{
					component: {
						name: 'GuideViewController',
						passProps: {
							isToSignUp: true
						},
						topBar: {
							visible: true,
							background: {
								color: Colors.theme,
							},
							noBorder: true,
							drawBehind: true,
						},
					}
				}]
			}
		});
	}
}

export default RouterEntry

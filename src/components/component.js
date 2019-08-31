import Button from './button/Button.vue'
import Radio from './radio/Radio.vue'
import RadioGroup from './radio-group/RadioGroup.vue'
import Checkbox from './checkbox/Checkbox.vue'
import CheckboxGroup from './checkbox-group/CheckboxGroup.vue'
import Grid from './grid/Grid.vue'
import GridItem from './grid-item/GridItem.vue'
import PageContent from './page-content/PageContent.vue'
import Navbar from './navbar/Navbar.vue'
import Switch from './switch/Switch.vue'
import Tab from './tab/Tab.vue'
import TabItem from './tab-item/TabItem.vue'
import Input from './input/Input.vue'
import Calendar from './calendar/Calendar.vue'
import CalendarJsCall from './calendar/calendar.js'
import Popup from './popup/index.js'
import Toast from './toast/index.js'
import Dialog from './dialog/index.js'
import Picker from './picker/index.js'
import ActionSheet from './action-sheet/index.js'
import Loading from './loading/index.js'
import Scroll from './scroll/Scroll.vue'
import DatePicker from './date-picker/index.js'
import Flex from './flex/Flex.vue'
import FlexItem from './flex-item/FlexItem.vue'
import Watermark from './watermark/Watermark.vue'
import GroupList from './group-list/GroupList.vue'
import GroupItem from './group-item/GroupItem.vue'
import ClipImage from './clipImage/index.js'
import BrowseImage from './browse-image/BrowseImage.vue'
const components = [
	Button,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	Grid,
	GridItem,
	PageContent,
	Navbar,
	Switch,
	Tab,
	TabItem,
	Input,
	Calendar,
	Scroll,
	Flex,
	FlexItem,
	Watermark,
	GroupList,
	GroupItem,
	BrowseImage
]
export default [
	...components,
	Popup,
	Toast,
	Dialog,
	Picker,
	ActionSheet,
	Loading,
	DatePicker,
	ClipImage,
	CalendarJsCall
]

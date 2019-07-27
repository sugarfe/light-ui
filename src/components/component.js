import Button from './button/Button.vue'
import Radio from './radio/Radio.vue'
import RadioGroup from './radioGroup/RadioGroup.vue'
import Checkbox from './checkbox/Checkbox.vue'
import CheckboxGroup from './checkboxGroup/CheckboxGroup.vue'
import Grid from './grid/Grid.vue'
import GridItem from './gridItem/GridItem.vue'
import PageContent from './pageContent/PageContent.vue'
import Navbar from './navbar/Navbar.vue'
import Switch from './switch/Switch.vue'
import Tab from './tab/Tab.vue'
import TabItem from './tabItem/TabItem.vue'
import Input from './input/Input.vue'
import Calendar from './calendar/Calendar.vue'
import Popup from './popup/index.js'
import Toast from './toast/index.js'
import Dialog from './dialog/index.js'
import Picker from './picker/index.js'
import ActionSheet from './actionSheet/index.js'
import Loading from './loading/index.js'
import Scroll from './scroll/Scroll.vue'
import DatePicker from './datePicker/index.js'
import Flex from './flex/Flex.vue'
import FlexItem from './flexItem/FlexItem.vue'
import Watermark from './watermark/Watermark.vue'
import GroupList from './groupList/GroupList.vue'
import GroupItem from './groupItem/GroupItem.vue'
import ClipImage from './clipImage/index.js'
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
	GroupItem
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
	ClipImage
]

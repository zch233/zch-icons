// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RetweetOutlinedSvg from 'gupo-icons-base/es/asn/RetweetOutlined';

export interface RetweetOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRetweetOutlined: RetweetOutlinedIconType = (props, context) => (
    <Icon name='RetweetOutlined' {...{ ...props, ...context.attrs }} icon={RetweetOutlinedSvg} />
);

IconRetweetOutlined.displayName = 'IconRetweetOutlined';
IconRetweetOutlined.theme = 'outlined';
IconRetweetOutlined.originName = 'retweet';

export default IconRetweetOutlined;

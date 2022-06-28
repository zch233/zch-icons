// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackOutlinedSvg from 'gupo-icons-base/es/asn/SlackOutlined';

export interface SlackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlackOutlined: SlackOutlinedIconType = (props, context) => <Icon name='SlackOutlined' {...{ ...props, ...context.attrs }} icon={SlackOutlinedSvg} />;

IconSlackOutlined.displayName = 'IconSlackOutlined';
IconSlackOutlined.theme = 'outlined';
IconSlackOutlined.originName = 'slack';

export default IconSlackOutlined;

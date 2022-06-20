// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackOutlinedSvg from 'icon-base/es/asn/SlackOutlined';

export interface SlackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSlackOutlined: SlackOutlinedIconType = (props, context) => <Icon name='SlackOutlined' {...{ ...props, ...context.attrs }} icon={SlackOutlinedSvg} />;

IconSlackOutlined.displayName = 'IconSlackOutlined';

export default IconSlackOutlined;

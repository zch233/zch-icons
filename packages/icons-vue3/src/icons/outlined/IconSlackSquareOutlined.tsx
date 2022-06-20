// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackSquareOutlinedSvg from 'icon-base/es/asn/SlackSquareOutlined';

export interface SlackSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSlackSquareOutlined: SlackSquareOutlinedIconType = (props, context) => (
    <Icon name='SlackSquareOutlined' {...{ ...props, ...context.attrs }} icon={SlackSquareOutlinedSvg} />
);

IconSlackSquareOutlined.displayName = 'IconSlackSquareOutlined';

export default IconSlackSquareOutlined;

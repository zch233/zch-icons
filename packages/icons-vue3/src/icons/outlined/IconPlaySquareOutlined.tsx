// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareOutlinedSvg from 'icon-base/es/asn/PlaySquareOutlined';

export interface PlaySquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlaySquareOutlined: PlaySquareOutlinedIconType = (props, context) => (
    <Icon name='PlaySquareOutlined' {...{ ...props, ...context.attrs }} icon={PlaySquareOutlinedSvg} />
);

IconPlaySquareOutlined.displayName = 'IconPlaySquareOutlined';

export default IconPlaySquareOutlined;

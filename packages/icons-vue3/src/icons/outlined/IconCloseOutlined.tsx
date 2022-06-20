// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseOutlinedSvg from 'icon-base/es/asn/CloseOutlined';

export interface CloseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseOutlined: CloseOutlinedIconType = (props, context) => <Icon name='CloseOutlined' {...{ ...props, ...context.attrs }} icon={CloseOutlinedSvg} />;

IconCloseOutlined.displayName = 'IconCloseOutlined';

export default IconCloseOutlined;

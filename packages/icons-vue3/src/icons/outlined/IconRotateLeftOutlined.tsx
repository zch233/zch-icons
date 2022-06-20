// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RotateLeftOutlinedSvg from 'icon-base/es/asn/RotateLeftOutlined';

export interface RotateLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRotateLeftOutlined: RotateLeftOutlinedIconType = (props, context) => (
    <Icon name='RotateLeftOutlined' {...{ ...props, ...context.attrs }} icon={RotateLeftOutlinedSvg} />
);

IconRotateLeftOutlined.displayName = 'IconRotateLeftOutlined';

export default IconRotateLeftOutlined;

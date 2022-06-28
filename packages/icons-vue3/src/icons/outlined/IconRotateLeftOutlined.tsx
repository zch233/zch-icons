// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RotateLeftOutlinedSvg from 'gupo-icons-base/es/asn/RotateLeftOutlined';

export interface RotateLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRotateLeftOutlined: RotateLeftOutlinedIconType = (props, context) => (
    <Icon name='RotateLeftOutlined' {...{ ...props, ...context.attrs }} icon={RotateLeftOutlinedSvg} />
);

IconRotateLeftOutlined.displayName = 'IconRotateLeftOutlined';
IconRotateLeftOutlined.theme = 'outlined';
IconRotateLeftOutlined.originName = 'rotate-left';

export default IconRotateLeftOutlined;

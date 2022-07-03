// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleOutlinedSvg from 'icons-base/es/asn/UpCircleOutlined';

export interface UpCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpCircleOutlined: UpCircleOutlinedIconType = (props, context) => (
    <Icon name='UpCircleOutlined' {...{ ...props, ...context.attrs }} icon={UpCircleOutlinedSvg} />
);

IconUpCircleOutlined.displayName = 'IconUpCircleOutlined';
IconUpCircleOutlined.theme = 'outlined';
IconUpCircleOutlined.originName = 'up-circle';

export default IconUpCircleOutlined;

// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleOutlinedSvg from 'icon-base/es/asn/UpCircleOutlined';

export interface UpCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUpCircleOutlined: UpCircleOutlinedIconType = (props, context) => (
    <Icon name='UpCircleOutlined' {...{ ...props, ...context.attrs }} icon={UpCircleOutlinedSvg} />
);

IconUpCircleOutlined.displayName = 'IconUpCircleOutlined';

export default IconUpCircleOutlined;

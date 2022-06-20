// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusOutlinedSvg from 'icon-base/es/asn/PlusOutlined';

export interface PlusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusOutlined: PlusOutlinedIconType = (props, context) => <Icon name='PlusOutlined' {...{ ...props, ...context.attrs }} icon={PlusOutlinedSvg} />;

IconPlusOutlined.displayName = 'IconPlusOutlined';

export default IconPlusOutlined;

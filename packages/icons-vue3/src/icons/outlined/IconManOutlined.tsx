// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ManOutlinedSvg from 'gupo-icons-base/es/asn/ManOutlined';

export interface ManOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconManOutlined: ManOutlinedIconType = (props, context) => <Icon name='ManOutlined' {...{ ...props, ...context.attrs }} icon={ManOutlinedSvg} />;

IconManOutlined.displayName = 'IconManOutlined';
IconManOutlined.theme = 'outlined';
IconManOutlined.originName = 'man';

export default IconManOutlined;

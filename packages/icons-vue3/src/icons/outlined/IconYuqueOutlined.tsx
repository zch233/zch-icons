// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YuqueOutlinedSvg from 'icon-base/es/asn/YuqueOutlined';

export interface YuqueOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconYuqueOutlined: YuqueOutlinedIconType = (props, context) => <Icon name='YuqueOutlined' {...{ ...props, ...context.attrs }} icon={YuqueOutlinedSvg} />;

IconYuqueOutlined.displayName = 'IconYuqueOutlined';

export default IconYuqueOutlined;

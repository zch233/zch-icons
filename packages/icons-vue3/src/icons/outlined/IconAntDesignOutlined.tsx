// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AntDesignOutlinedSvg from 'icon-base/es/asn/AntDesignOutlined';

export interface AntDesignOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAntDesignOutlined: AntDesignOutlinedIconType = (props, context) => (
    <Icon name='AntDesignOutlined' {...{ ...props, ...context.attrs }} icon={AntDesignOutlinedSvg} />
);

IconAntDesignOutlined.displayName = 'IconAntDesignOutlined';

export default IconAntDesignOutlined;

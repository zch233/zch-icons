// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AntDesignOutlinedSvg from 'gupo-icons-base/es/asn/AntDesignOutlined';

export interface AntDesignOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAntDesignOutlined: AntDesignOutlinedIconType = (props, context) => (
    <Icon name='AntDesignOutlined' {...{ ...props, ...context.attrs }} icon={AntDesignOutlinedSvg} />
);

IconAntDesignOutlined.displayName = 'IconAntDesignOutlined';
IconAntDesignOutlined.theme = 'outlined';
IconAntDesignOutlined.originName = 'ant-design';

export default IconAntDesignOutlined;

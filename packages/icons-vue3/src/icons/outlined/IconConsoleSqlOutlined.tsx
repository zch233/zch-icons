// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ConsoleSqlOutlinedSvg from 'gupo-icons-base/es/asn/ConsoleSqlOutlined';

export interface ConsoleSqlOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconConsoleSqlOutlined: ConsoleSqlOutlinedIconType = (props, context) => (
    <Icon name='ConsoleSqlOutlined' {...{ ...props, ...context.attrs }} icon={ConsoleSqlOutlinedSvg} />
);

IconConsoleSqlOutlined.displayName = 'IconConsoleSqlOutlined';
IconConsoleSqlOutlined.theme = 'outlined';
IconConsoleSqlOutlined.originName = 'console-sql';

export default IconConsoleSqlOutlined;
